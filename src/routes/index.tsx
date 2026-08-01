import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/puzzi-hero.png.asset.json";

const TEL = "06 30 298 8360";
const TEL_HREF = "tel:+36302988360";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kärcher Puzzi 10/1 bérlés Győr – Szabadhegyi Gépkölcsönző" },
      {
        name: "description",
        content:
          "Kärcher Puzzi 10/1 szőnyeg- és kárpittisztító gép bérlése Győrben. 6.500 Ft / 24 óra, 5.000 Ft / 4 óra. 9028 Győr, Balogh Ádám u. 6. Tel.: 06 30 298 8360.",
      },
      { property: "og:title", content: "Kärcher Puzzi 10/1 bérlés Győr" },
      {
        property: "og:description",
        content:
          "Szőnyeg- és kárpittisztító gép kölcsönzés Győrben. 6.500 Ft / 24 óra. Hívjon: 06 30 298 8360.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b-4 border-primary bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div>
            <p className="text-lg font-extrabold uppercase tracking-tight">
              Szabadhegyi Gépkölcsönző
            </p>
            <p className="text-sm opacity-80">9028 Győr, Balogh Ádám u. 6.</p>
          </div>
          <a
            href={TEL_HREF}
            className="rounded-lg bg-primary px-5 py-2.5 text-base font-bold text-primary-foreground"
          >
            {TEL}
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-12 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
              Kärcher Puzzi 10/1
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Szőnyeg- és kárpittisztító gép bérlés Győrben
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Profi mélytisztítás szőnyegre, kanapéra, matracra és autókárpitra – egyetlen
              géppel, szőnyeg- és kárpittisztító fejjel együtt.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={TEL_HREF}
                className="rounded-lg bg-primary px-6 py-3 text-lg font-bold text-primary-foreground"
              >
                Foglalás telefonon
              </a>
              <a
                href="#arak"
                className="rounded-lg border-2 border-secondary px-6 py-3 text-lg font-bold"
              >
                Árak
              </a>
            </div>
          </div>
          <img
            src={heroImg.url}
            alt="Kärcher Puzzi 10/1 szőnyeg- és kárpittisztító gép bérlés Győr"
            width={1441}
            height={1092}
            className="rounded-2xl border-4 border-primary object-cover"
          />
        </section>

        <section id="arak" className="bg-muted py-12">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-2xl font-extrabold">Bérleti díjak</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { t: "6 ÓRA", p: "5.000 Ft" },
                { t: "24 óra", p: "6.500 Ft" },
                { t: "Kaució", p: "Nincs" },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-xl border border-border bg-card p-6 text-center"
                >
                  <p className="text-sm font-semibold uppercase text-muted-foreground">
                    {x.t}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold">{x.p}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A kauciót a gép sérülésmentes, tiszta állapotban való visszahozatalakor teljes
              egészében visszafizetjük.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="text-2xl font-extrabold">Mire használható?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Darab- és padlószőnyeg",
              "Kanapé, ülőgarnitúra",
              "Ágymatrac, ágybetét",
              "Autó belső kárpit",
              "Egyéb kárpitos bútorok",
              "Tisztítás és frissítés",
            ].map((x) => (
              <li
                key={x}
                className="rounded-lg border-l-4 border-primary bg-card px-4 py-3 font-medium"
              >
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted-foreground">
            Az erős szívóerőnek köszönhetően a tisztított felület néhány óra alatt megszárad, és
            a géphez szőnyeg- és kárpittisztító fejet egyaránt adunk.
          </p>
        </section>

        <section className="bg-secondary py-12 text-secondary-foreground">
          <div className="mx-auto max-w-5xl px-5">
            <h2 className="text-2xl font-extrabold">Kölcsönzési feltételek</h2>
            <ul className="mt-6 space-y-3 text-sm opacity-90">
              <li>Gép előfoglalása személyesen, telefonon vagy üzenetben.</li>
              <li>
                A bérleti szerződéshez személyi igazolvány és lakcímkártya szükséges. Adatokat
                csak a kölcsönzés idejére tárolunk.
              </li>
              <li>Minden bérlésnél kauciót kérünk, amit hiánytalanul visszafizetünk.</li>
              <li>
                A szerződésben meghatározott időn túli használatért – 30 perc türelmi idő után –
                plusz 1 napi bérleti díj fizetendő.
              </li>
              <li>A gépet kérjük tiszta állapotban visszahozni.</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="text-2xl font-extrabold">Kapcsolat és nyitvatartás</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-4 border-primary p-6">
              <p className="text-lg font-bold">Szabadhegyi Gépkölcsönző</p>
              <p className="mt-1 text-muted-foreground">9028 Győr, Balogh Ádám u. 6.</p>
              <a href={TEL_HREF} className="mt-4 block text-3xl font-extrabold">
                {TEL}
              </a>
            </div>
            <div className="rounded-xl bg-muted p-6">
              <p className="font-bold">Nyitvatartás</p>
              <p className="mt-2">Hétfő – Péntek: 08.00 – 17.00</p>
              <p>Szombat: 08.00 – 14.00</p>
              <p>Vasárnap: Zárva</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        {"\n"}
      </footer>
    </div>
  );
}
