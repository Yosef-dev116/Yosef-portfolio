#!/usr/bin/env python3
"""Generate the one-page resume served by the portfolio site."""

from __future__ import annotations

import argparse
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_OUTPUT = ROOT / "public" / "resume.pdf"
BLOG_URL = "https://yosefmekonnen.dev/blog/rural-reach-animal-welfare-hackathon"
PERSONAL_FINANCE_URL = "https://github.com/Yosef-dev116/personal-finance-dashboard"
GATHERBITE_URL = "https://github.com/Yosef-dev116/gatherbite"
ULTIMATE_TIC_TAC_TOE_URL = "https://github.com/Yosef-dev116/ultimate-tic-tac-toe"
DEVPROOF_URL = "https://github.com/Yosef-dev116/Devproof"
FONT_DIR = Path(__file__).resolve().parent / "fonts"

regular_face = pdfmetrics.EmbeddedType1Face(
    FONT_DIR / "lmr10.afm",
    FONT_DIR / "lmr10.pfb",
)
bold_face = pdfmetrics.EmbeddedType1Face(
    FONT_DIR / "lmbx10.afm",
    FONT_DIR / "lmbx10.pfb",
)
for face in (regular_face, bold_face):
    # Latin Modern's AFM metrics use decimal values; ReportLab leaves them as
    # strings even though its Paragraph engine expects numbers.
    face.ascent = float(face.ascent)
    face.descent = float(face.descent)
pdfmetrics.registerTypeFace(regular_face)
pdfmetrics.registerTypeFace(bold_face)
pdfmetrics.registerFont(
    pdfmetrics.Font("LMRoman10", "LMRoman10-Regular", "WinAnsiEncoding")
)
pdfmetrics.registerFont(
    pdfmetrics.Font("LMRoman10-Bold", "LMRoman10-Bold", "WinAnsiEncoding")
)
pdfmetrics.registerFontFamily(
    "LMRoman10",
    normal="LMRoman10",
    bold="LMRoman10-Bold",
)


def paragraph(text: str, style: ParagraphStyle, **kwargs) -> Paragraph:
    return Paragraph(text, style, **kwargs)


def build_resume(output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)

    styles = getSampleStyleSheet()
    body = ParagraphStyle(
        "ResumeBody",
        parent=styles["BodyText"],
        fontName="LMRoman10",
        fontSize=9.85,
        leading=11.45,
        textColor=colors.HexColor("#111111"),
        spaceAfter=0,
    )
    body_center = ParagraphStyle(
        "ResumeBodyCenter",
        parent=body,
        alignment=TA_CENTER,
    )
    name = ParagraphStyle(
        "Name",
        parent=body_center,
        fontName="LMRoman10-Bold",
        fontSize=22.5,
        leading=22.5,
        spaceAfter=1,
    )
    section = ParagraphStyle(
        "Section",
        parent=body,
        fontName="LMRoman10-Bold",
        fontSize=13.7,
        leading=14.5,
        spaceBefore=4,
        spaceAfter=1.2,
    )
    item_title = ParagraphStyle(
        "ItemTitle",
        parent=body,
        fontName="LMRoman10-Bold",
        fontSize=10.45,
        leading=11.55,
    )
    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=9,
        firstLineIndent=-7,
        bulletIndent=0,
        bulletFontName="LMRoman10",
        bulletFontSize=9.85,
        spaceBefore=0.25,
    )

    doc = BaseDocTemplate(
        str(output_path),
        pagesize=letter,
        leftMargin=0.53 * inch,
        rightMargin=0.53 * inch,
        topMargin=0.38 * inch,
        bottomMargin=0.34 * inch,
        title="Yosef Mekonnen Resume",
        author="Yosef Mekonnen",
        subject="Computer Science co-op resume",
        invariant=True,
    )
    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        doc.width,
        doc.height,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    doc.addPageTemplates(PageTemplate(id="resume", frames=[frame]))

    story = [
        paragraph("Yosef Mekonnen", name),
        paragraph(
            'Charlottetown, PE &nbsp;-&nbsp; (782) 377-5265 &nbsp;-&nbsp; '
            '<link href="mailto:ymekonnen@upei.ca" color="#111111">ymekonnen@upei.ca</link>',
            body_center,
        ),
        paragraph(
            '<link href="https://yosefmekonnen.dev" color="#111111">yosefmekonnen.dev</link>'
            ' &nbsp;-&nbsp; '
            '<link href="https://github.com/Yosef-dev116" color="#111111">github.com/Yosef-dev116</link>'
            ' &nbsp;-&nbsp; '
            '<link href="https://linkedin.com/in/yosefmekonnen" color="#111111">linkedin.com/in/yosefmekonnen</link>',
            body_center,
        ),
        Spacer(1, 4.8),
    ]

    def add_section(title: str) -> None:
        story.append(paragraph(title, section))
        story.append(
            Table(
                [[""]],
                colWidths=[doc.width],
                rowHeights=[0.8],
                style=TableStyle(
                    [
                        ("LINEABOVE", (0, 0), (-1, -1), 0.45, colors.HexColor("#555555")),
                        ("LEFTPADDING", (0, 0), (-1, -1), 0),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                        ("TOPPADDING", (0, 0), (-1, -1), 0),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                    ]
                ),
            )
        )

    def add_item(
        title: str,
        date: str,
        *,
        space_before: float = 1.2,
        date_width: float = 1.05,
    ) -> None:
        story.append(Spacer(1, space_before))
        story.append(
            Table(
                [[paragraph(title, item_title), paragraph(date, body)]],
                colWidths=[doc.width - date_width * inch, date_width * inch],
                style=TableStyle(
                    [
                        ("VALIGN", (0, 0), (-1, -1), "TOP"),
                        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                        ("LEFTPADDING", (0, 0), (-1, -1), 0),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                        ("TOPPADDING", (0, 0), (-1, -1), 0),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                    ]
                ),
            )
        )

    def add_bullet(text: str) -> None:
        story.append(paragraph(text, bullet, bulletText="-"))

    add_section("Profile")
    story.append(
        paragraph(
            "Computer Science co-op student at UPEI, minoring in Mathematics, with experience building "
            "full-stack and AI-assisted software in Python, TypeScript, JavaScript, and Java. Currently an "
            "AI-First Developer at PEI IT Alliance. Actively seeking Summer 2027 co-op opportunities.",
            body,
        )
    )

    add_section("Education")
    story.append(
        Table(
            [
                [
                    paragraph(
                        "<b>BSc Computer Science (Co-op), Minor in Mathematics</b> - "
                        "University of Prince Edward Island",
                        body,
                    ),
                    paragraph("<b>Expected: Dec 2028</b>", body),
                ]
            ],
            colWidths=[doc.width - 1.75 * inch, 1.75 * inch],
            style=TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (0, 0), 8),
                    ("LEFTPADDING", (1, 0), (1, 0), 8),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                ]
            ),
        )
    )
    story.append(
        paragraph(
            "<b>Coursework:</b> Data Structures &amp; Algorithms, OOP, Database Systems, Web Programming, "
            "Linear Algebra, Calculus, Differential Equations",
            body,
        )
    )

    add_section("Technical Skills")
    story.extend(
        [
            paragraph("<b>Languages:</b> Python, TypeScript, JavaScript, Java, SQL, HTML, CSS", body),
            paragraph(
                "<b>Frameworks &amp; Tools:</b> React, Next.js, Node.js, Express, FastAPI, PostgreSQL, REST APIs, Git, GitHub",
                body,
            ),
            paragraph(
                "<b>AI &amp; Data:</b> OpenAI API, Vercel AI SDK, RAG, ChromaDB, BM25, Recharts, Zod",
                body,
            ),
        ]
    )

    add_section("Projects")
    add_item(
        f'<link href="{PERSONAL_FINANCE_URL}" color="#111111">Personal Finance Dashboard - React / Node.js / Express / OpenAI API</link>',
        "2026",
    )
    add_bullet(
        "Built and deployed a finance app with transaction CRUD, monthly reports, Recharts visualizations, "
        "OpenAI-generated analysis, and PostgreSQL storage on Neon."
    )

    add_item(
        f'<link href="{GATHERBITE_URL}" color="#111111">GatherBite - Next.js / TypeScript / AI Agents</link>',
        "2026",
        space_before=2,
    )
    add_bullet(
        "Built a group-ordering agent with separate planner and verifier models plus deterministic checks for "
        "dietary coverage, item validity, serving capacity, and budget."
    )
    add_bullet(
        "Added bounded retries and pre- and post-execution verification so missing evidence or a mismatched cart "
        "fails closed instead of reaching checkout."
    )

    add_item(
        f'<link href="{ULTIMATE_TIC_TAC_TOE_URL}" color="#111111">Ultimate Tic-Tac-Toe - React / TypeScript</link>',
        "2026",
        space_before=2,
    )
    add_bullet(
        "Built a mobile-first daily puzzle with deterministic UTC-based challenges, a minimax AI with alpha-beta "
        "pruning, local result persistence, and shareable game summaries."
    )

    add_item(
        f'<link href="{DEVPROOF_URL}" color="#111111">DevProof - FastAPI / React / PostgreSQL / OpenAI</link>',
        "2026",
        space_before=2,
    )
    add_bullet(
        "Built a GitHub analysis platform that grounds structured engineering-readiness and resume-verification "
        "reports in repository metadata, commit activity, documentation, and source code."
    )

    add_section("Work Experience")
    add_item(
        "AI-First Developer - PEI IT Alliance, Charlottetown, PE",
        "Sep 2026 - Present",
        space_before=0.8,
        date_width=1.45,
    )
    add_bullet(
        "Build and ship software with AI tooling throughout prototyping, implementation, code review, and "
        "product development."
    )
    add_item("Grocery Clerk - Atlantic Superstore, Charlottetown, PE", "May - Sep 2025", space_before=1.7)
    add_bullet(
        "Stocked and organized inventory, helped customers, and managed competing priorities in a high-volume "
        "store while studying full time."
    )

    add_section("Professional Development &amp; Achievements")
    add_item(
        f'<link href="{BLOG_URL}" color="#111111">Rural Reach - Most Animal Welfare Impact Award</link>',
        "Sept 2026",
        space_before=0.8,
    )
    add_bullet(
        "Helped design a co-op model connecting farmers with travelling veterinarians, shared portable equipment, "
        "and maintenance support."
    )
    add_bullet(
        "Worked with computer science and veterinary teammates to test and pitch the service model; "
        "won the UPEI Animal Welfare Hackathon's Most Animal Welfare Impact award."
    )
    add_item("Wavemakers Innovation &amp; Leadership Program - Graduate", "Feb 2026", space_before=1.7)
    add_bullet(
        "Completed team challenges in problem framing, solution design, documentation, and presentations to "
        "industry professionals."
    )

    add_section("Availability")
    story.append(
        paragraph(
            "Available full-time May - August 2027 &nbsp;-&nbsp; Charlottetown, PE &nbsp;-&nbsp; "
            "Authorized to work in Canada on a co-op work permit through UPEI",
            body,
        )
    )

    doc.build(story)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"PDF destination (default: {DEFAULT_OUTPUT})",
    )
    args = parser.parse_args()
    build_resume(args.output.resolve())


if __name__ == "__main__":
    main()
