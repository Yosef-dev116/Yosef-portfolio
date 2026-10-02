from __future__ import annotations

import hashlib
import tempfile
import unittest
from pathlib import Path

from pypdf import PdfReader

from resume.generate_resume import build_resume


class ResumeGenerationTests(unittest.TestCase):
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
