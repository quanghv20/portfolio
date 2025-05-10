import { useNavigate } from "react-router-dom";
import Prism from "prismjs"; // Import PrismJS
import CodeBlock from "@/components/CodeBlock/index.tsx";
import { HeroHeading } from "@/components/index.ts";

export default function ArticleDetailsPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="sm:px-8 mt-16 lg:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                  <button
                    type="button"
                    aria-label="Go back to articles"
                    className="cursor-pointer group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                    onClick={handleGoBack}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                    >
                      <path
                        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <article>
                    <header className="flex flex-col">
                      <time
                        dateTime="2022-09-05"
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500 mb-4"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                        <span className="ml-3">September 5, 2022</span>
                      </time>
                      <HeroHeading
                        text={
                          "Crafting a design system for a multiplanetary future"
                        }
                      />
                    </header>

                    <div
                      className="mt-8 prose dark:prose-invert"
                      data-mdx-content="true"
                    >
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Most companies try to stay ahead of the curve when it
                        comes to visual design, but for Planetaria we needed to
                        create a brand that would still inspire us 100 years
                        from now when humanity has spread across our entire
                        solar system.
                      </p>
                      <img
                        alt=""
                        loading="lazy"
                        width={1310}
                        height={872}
                        decoding="async"
                        data-nimg={1}
                        src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplanetaria-design-system.d4cfce90.png&w=1920&q=75"
                        style={{ color: "transparent" }}
                        className="mt-8 mb-8 rounded-3xl"
                      />
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I knew that to get it right I was going to have to
                        replicate the viewing conditions of someone from the
                        future, so I grabbed my space helmet from the closet,
                        created a new Figma document, and got to work.
                      </p>
                      <h2 className="text-highlight mt-6 sm:text-2xl">
                        Sermone fata
                      </h2>
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Lorem markdownum, bracchia in redibam! Terque unda puppi
                        nec, linguae posterior in utraque respicere candidus
                        Mimasque formae; quae conantem cervice. Parcite
                        variatus, redolentia adeunt. Tyrioque dies, naufraga sua
                        adit partibus celanda torquere temptata, erit maneat et
                        ramos,{" "}
                        <a href="#" className="text-highlight">
                          iam
                        </a>{" "}
                        ait dominari potitus! Tibi litora matremque fumantia
                        condi radicibus opusque.
                      </p>
                      <p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">
                        Deus feram verumque, fecit, ira tamen, terras per
                        alienae victum. Mutantur levitate quas ubi arcum ripas
                        oculos abest. Adest{" "}
                        <a href="#" className="text-highlight">
                          commissaque victae
                        </a>{" "}
                        in gemitus nectareis ire diva dotibus ora, et findi huic
                        invenit; fatis? Fractaque dare superinposita nimiumque
                        simulatoremque sanguine, at voce aestibus diu! Quid
                        veterum hausit tu nil utinam paternos ima, commentaque.
                      </p>
                      <CodeBlock
                        code={`const Prism = require('prismjs'); \nconst loadLanguages = require('prismjs/components/'); \nloadLanguages(['haml']); \n\n// Returns a highlighted HTML string \nconst html = Prism.highlight(code, Prism.languages.haml, 'haml');`}
                        language="javascript"
                      />
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Aere repetiti cognataque natus. Habebat vela solutis
                        saepe munus nondum adhuc oscula nomina pignora corpus
                        deserat.
                      </p>
                      <h2 className="mt-6 text-highlight sm:text-2xl">
                        Lethaei Pindumve me quae dinumerat Pavor
                      </h2>
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Idem se saxa fata pollentibus geminos; quos pedibus. Est
                        urnis Herses omnes nec divite: et ille illa furit sim
                        verbis Cyllenius.
                      </p>
                      <ol>
                        {[
                          "Captus inpleverunt collo",
                          "Siquos vulgus",
                          "Dictis carissime fugae",
                          "A tacitos nulla viginti",
                          "Nec nam placebant",
                        ].map((item, index: number) => {
                          return (
                            <li key={index}>
                              <p className="font-bold mt-4 text-base text-zinc-600 dark:text-zinc-400">
                                <span className="mr-2">{index + 1}. </span>{" "}
                                {item}
                              </p>
                            </li>
                          );
                        })}
                      </ol>
                      <p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">
                        Ungues fistula annoso, ille addit linoque motatque
                        uberior verso{" "}
                        <a href="#" className="text-highlight">
                          rubuerunt
                        </a>{" "}
                        confine desuetaque. <em>Sanguine</em> anteit emerguntque
                        expugnacior est pennas iniqui ecce{" "}
                        <strong>haeret</strong> genus: peiora imagine fossas
                        Cephisos formosa! Refugitque amata{" "}
                        <a href="#" className="text-highlight">
                          refelli
                        </a>
                        supplex. Summa brevis vetuere tenebas, hostes vetantis,
                        suppressit, arreptum regna. Postquam conpescit iuvenis
                        habet corpus, et erratica, perdere, tot mota ars talis.
                      </p>
                      <CodeBlock
                        code={`const Prism = require('prismjs'); \nconst loadLanguages = require('prismjs/components/'); \nloadLanguages(['haml']); \n\n// Returns a highlighted HTML string \nconst html = Prism.highlight(code, Prism.languages.haml, 'haml');`}
                        language="javascript"
                      />
                      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        Sit volat naturam; motu Cancri. Erat pro simul quae
                        valuit quoque timorem quam proelia: illo patrio{" "}
                        <em>esse summus</em>, enim sua serpentibus, Hyleusque.
                        Est coniuge recuso; refert Coroniden ignotos manat,
                        adfectu.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
