export default function Header() {

    return (
        <>
            <div className="flex justify-center align-bottom pt-8">

                <h1 className="text-7xl">One Productive Day</h1>

                <ul className="flex mx-12 pt-6">
                    <li className="px-3 text-2xl">About</li>
                    <li className="px-3 text-2xl">Toggle theme</li>
                </ul>

            </div>
            <div className="flex justify-center bg-sky-200 w-1/2 m-auto h-2"></div>
        </>
    )
}