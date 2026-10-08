from __future__ import annotations

import hashlib
import tempfile
import unittest
from pathlib import Path

from pypdf import PdfReader

from resume.generate_resume import build_resume


class ResumeGenerationTests(unittest.TestCase):
    def test_uses_summer_2027_availability(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "resume.pdf"
            build_resume(output)

            text = " ".join(
                " ".join((page.extract_text() or "").split())
                for page in PdfReader(output).pages
            )

            self.assertIn("Actively seeking Summer 2027 co-op opportunities", text)
            self.assertIn("Available full-time May - August 2027", text)
            self.assertNotIn("Fall 2026", text)
            self.assertNotIn("September - December 2026", text)

    def test_embeds_latin_modern_typography(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "resume.pdf"
            build_resume(output)

            reader = PdfReader(output)
            base_fonts = {
                str(font.get_object().get("/BaseFont"))
                for font in reader.pages[0]["/Resources"]["/Font"].values()
            }

            self.assertTrue(
                any("LMRoman10-Regular" in font for font in base_fonts),
                base_fonts,
            )
            self.assertTrue(
                any("LMRoman10-Bold" in font for font in base_fonts),
                base_fonts,
            )

            for font in reader.pages[0]["/Resources"]["/Font"].values():
                font_object = font.get_object()
                if "LMRoman10" not in str(font_object.get("/BaseFont")):
                    continue
                descriptor = font_object["/FontDescriptor"].get_object()
                self.assertTrue(
                    any(
                        key in descriptor
                        for key in ("/FontFile", "/FontFile2", "/FontFile3")
                    ),
                    descriptor,
                )

    def test_text_layer_contains_no_control_characters(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "resume.pdf"
            build_resume(output)

            text = "\n".join(
                page.extract_text() or "" for page in PdfReader(output).pages
            )
            controls = [
                character
                for character in text
                if ord(character) == 127
                or (ord(character) < 32 and character not in "\n\t")
            ]

            self.assertEqual(controls, [])

    def test_generates_identical_pdf_bytes(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            first = Path(directory) / "first.pdf"
            second = Path(directory) / "second.pdf"
            build_resume(first)
            build_resume(second)

            self.assertEqual(
                hashlib.sha256(first.read_bytes()).digest(),
                hashlib.sha256(second.read_bytes()).digest(),
            )


if __name__ == "__main__":
    unittest.main()
