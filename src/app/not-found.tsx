import Link from "next/link";

export default async function NotFound() {
  return <>
    <section className="flex h-full w-full  text-white flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="bg-gray-800">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-6xl text-3xl font-bold text-primary">
              404
            </h1>

            <h6 className="mb-2 text-center font-segoe_uibold text-2xl md:text-3xl">
              <span className="text-primary-500-500">Oops!</span> Page{" "}
              <span className="text-primary">non trouvée</span>
            </h6>

            <p className="mb-4 text-center font-segoe_uisemibold md:text-lg">
              La page que vous recherchez n'existe pas.
            </p>

            <Link
              href={"#"}
              className=" rounded-2xl px-5 py-2 hover:bg-primary"
            >
              Retourner à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </section>

  </>
}