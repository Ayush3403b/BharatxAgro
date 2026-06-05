import Link from "next/link";
import { Globe, AtSign, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#012f24] text-white">
      <div className="mx-auto max-w-[1600px] px-14 py-20">
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-5xl font-bold text-[#f2c572]">
              BharatXAgro
            </h2>

            <p className="mt-8 max-w-xs text-lg leading-relaxed text-white/90">
              {`Connecting global tables to India's finest agricultural heritage
              with transparency and excellence.`}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-8 font-serif text-4xl font-semibold">
              Premium Products
            </h3>

            <ul className="space-y-5 text-lg">
              <li>
                <Link href="/products/moringa">Moringa</Link>
              </li>

              <li>
                <Link href="/products/makhana">Makhana</Link>
              </li>

              <li>
                <Link href="/products/onion-powder">
                  Onion Powder
                </Link>
              </li>

              <li>
                <Link href="/products/mushrooms">
                  Mushrooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-8 font-serif text-4xl font-semibold">
              Company
            </h3>

            <ul className="space-y-5 text-lg">
              <li>
                <Link href="/sustainability">
                  Sustainability
                </Link>
              </li>

              <li>
                <Link href="/quality">
                  Quality Protocol
                </Link>
              </li>

              <li>
                <Link href="/about">
                  Our Journey
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-8 font-serif text-4xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-lg">
              <p>Export Tower, New Delhi, India</p>

              <p>exports@bharatxagro.com</p>

              <div className="flex items-center gap-6 pt-3">
                <Globe
                  size={26}
                  className="cursor-pointer text-[#f2c572]"
                />

                <AtSign
                  size={26}
                  className="cursor-pointer text-[#f2c572]"
                />

                <Share2
                  size={26}
                  className="cursor-pointer text-[#f2c572]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/10" />

        {/* Bottom */}
        <div className="text-center text-lg text-white/80">
          © 2024 BharatXAgro. Premium Agricultural Exports.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}