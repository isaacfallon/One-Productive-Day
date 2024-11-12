import Modal from "./Modal";
import { useState } from "react";

export default function Header() {

    const [open, setOpen] = useState(false);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, 0);
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <header>
            <p className="text-2xl absolute top-2 right-2 px-12 bg-zinc-600 dark:bg-gray-200 text-gray-100 dark:text-zinc-600 font-bold px-4 rounded">
                Today's date: {today}
            </p>
            <div className="flex justify-center align-bottom pt-8">

                <h1 className="text-7xl">One Productive Day</h1>


                    <Modal open={open} onClose={() => setOpen(false)}>
                        <div className="mx-auto text-center my-4 w-[600px] p-4">
                            <h3 className="text-3xl font-black mb-2">Patch notes: (Date)</h3>
                            <div className="text-left">
                                <ul>
                                    <li className="list-disc ml-4">Patch note</li>
                                </ul>
                            </div>
                        </div>
                    </Modal>

            </div>
            <div className="flex justify-center bg-sky-200 w-1/2 m-auto h-2"></div>
        </header>
    )
}