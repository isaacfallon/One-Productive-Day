export default function Header() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, 0);
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <>
            <p className="text-2xl absolute top-2 right-2 px-12 bg-zinc-600 dark:bg-gray-200 text-gray-100 dark:text-zinc-600 font-bold px-4 rounded">
                Today's date: {today}
            </p>
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