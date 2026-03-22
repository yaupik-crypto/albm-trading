import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | ALBM Trading Limited",
  description:
    "A Little Bit More Trading Limited (ALBM) privacy policy. Data integrity, transparency in global sourcing, and institutional trust.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <Link
            href="/"
            className="font-serif text-sm font-medium tracking-[0.28em] text-black"
          >
            ALBM
          </Link>
          <span className="text-[0.6rem] uppercase tracking-[0.35em] text-gray-500">
            Privacy Policy
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-24 md:px-8 md:py-32">
        <h1 className="font-serif text-4xl tracking-tight text-black md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.32em] text-gray-500">
          私隱政策
        </p>

        <div className="mt-20 space-y-20">
          <section>
            <h2 className="font-serif text-xl tracking-tight text-black">
              Data Integrity &amp; Transparency
            </h2>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-gray-500">
              數據誠信與透明度
            </p>
            <p className="mt-4 text-base leading-relaxed tracking-wide text-gray-500">
              A Little Bit More Trading Limited (ALBM) is committed to the
              integrity and transparency of data across our global sourcing and
              supply chain operations. We process business contact information,
              operational data, and transactional records strictly for
              legitimate corporate purposes—enabling traceability, auditability,
              and compliance at every stage of our value chain.
            </p>
            <p className="mt-6 text-base leading-relaxed tracking-wide text-gray-500">
              ALBM 致力於在全球採購及供應鏈營運中維持數據誠信與透明度。我們僅基於正當商業目的處理業務聯絡資料、營運數據及交易記錄，以實現整個價值鏈每個階段的可追溯性、可稽核性及合規性。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl tracking-tight text-black">
              Collection &amp; Use
            </h2>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-gray-500">
              收集與使用
            </p>
            <p className="mt-4 text-base leading-relaxed tracking-wide text-gray-500">
              We collect information necessary to conduct sourcing,
              cold-chain logistics, and market entry activities. This may include
              counterparty details, shipment data, temperature logs, and
              compliance documentation. Data is retained only as long as required
              for legal, regulatory, or contractual obligations, and for
              institutional audit trails.
            </p>
            <p className="mt-6 text-base leading-relaxed tracking-wide text-gray-500">
              我們收集開展採購、冷鏈物流及市場進入活動所需的信息，可能包括交易對手資料、貨運數據、溫度記錄及合規文件。數據僅在履行法律、監管或合約義務以及機構審計追蹤所需期間內保留。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl tracking-tight text-black">
              Security &amp; Confidentiality
            </h2>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-gray-500">
              安全與保密
            </p>
            <p className="mt-4 text-base leading-relaxed tracking-wide text-gray-500">
              We apply proportionate technical and organizational measures to
              protect information against unauthorized access, loss, alteration,
              or disclosure. Access is restricted on a need-to-know basis.
              Third-party processors involved in our supply chain are bound by
              confidentiality and data protection obligations aligned with our
              standards.
            </p>
            <p className="mt-6 text-base leading-relaxed tracking-wide text-gray-500">
              我們採取相稱的技術及組織措施，保護信息免於未經授權的存取、遺失、篡改或披露。存取權限按「知悉所需」原則限制。供應鏈中涉及的第三方處理方須遵守與我們標準一致的保密及數據保護義務。
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl tracking-tight text-black">
              Institutional Trust
            </h2>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-gray-500">
              機構信任
            </p>
            <p className="mt-4 text-base leading-relaxed tracking-wide text-gray-500">
              Trust is central to our operations. We do not sell personal data.
              We do not use information for purposes incompatible with those
              described here. For enquiries regarding your data or this policy,
              please contact us at info@albmtrading.com.
            </p>
            <p className="mt-6 text-base leading-relaxed tracking-wide text-gray-500">
              信任是我們營運的核心。我們不出售個人資料，亦不會將信息用於與本政策所述目的不相符的用途。如有關您的數據或本政策的查詢，請電郵 info@albmtrading.com 與我們聯絡。
            </p>
          </section>
        </div>

        <footer className="mt-24 border-t border-gray-100 pt-14">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.38em] text-gray-500 transition-colors hover:text-black"
          >
            <span className="h-px w-8 bg-current" />
            Back to Home
          </Link>
        </footer>
      </main>
    </div>
  )
}
