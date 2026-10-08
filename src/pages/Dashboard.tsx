import { Link } from "react-router-dom"

export default function Dashboard() {
    return (

        <>
            <main className="w-full h-screen bg-amber-500 flex justify-center py-10 px-5 md:py-30 md:px-15">

                <div className="flex flex-col w-full h-full justify-center border gap-5">

                    <div className="flex w-full flex-1 rounded-2xl bg-red-500 " >
                        <div className="bg-amber-50 w-full flex flex-1"></div>
                        <div className="bg-blue-400 w-full flex-2">

                            <Link to='/Shopping' className="w-full h-full flex">

                            </Link>
                        </div>

                    </div>

                    <div className="flex w-full flex-1 rounded-2xl bg-green-400">
                        <div className="bg-amber-50 w-full flex flex-1"></div>
                        <div className="bg-red-600 w-full flex flex-2"></div>
                    </div>

                    <div className="flex w-full flex-1 rounded-2xl bg-yellow-300">
                        <div className="bg-amber-50 w-full flex flex-1"></div>
                        <div className="bg-green-400 w-full flex flex-2"></div>
                    </div>

                    <div className="flex w-full flex-1 rounded-2xl bg-amber-50">
                        <div className="bg-amber-50 w-full flex flex-1"></div>
                        <div className="bg-black w-full flex flex-2"></div>
                    </div>

                </div>

            </main>

        </>

    )
}
