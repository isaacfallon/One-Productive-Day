import { useState } from 'react';
import Modal from './Modal';

export default function Footer() {

    const [open, setOpen] = useState(false);

    return (
        <footer className="text-center font-semibold text-lg mt-auto pb-4 pr-4">
            <ul className="flex justify-end flex-row mt-6">

                <li className="px-8 hover:text-sky-700 hover:cursor-pointer font-bold" onClick={() => setOpen(true)}>About</li>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="mx-auto text-center my-4 w-[600px] p-4">
                        <h3 className="text-3xl font-black mb-2">About</h3>
                        <div className="text-left">
                            <p>&apos;One Productive Day&apos; is an all-in-one productivity hub that combines a pomodoro timer, to-do list tracker and daily scheduler.</p>
                            <br></br>
                            <p className="font-bold">PLEASE NOTE: This application is currently in development and is missing some key features.</p>
                        </div>
                    </div>
                </Modal>

                <li className="px-4"><a href="https://isaacfallon.com/" target="_blank" rel="noreferrer" className="hover:text-sky-700">Made by Isaac Fallon</a></li>
                <li className="px-4"><a href="https://github.com/isaacfallon/One-Productive-Day" target="_blank" rel="noreferrer" className="hover:text-sky-700">GitHub</a></li>
            </ul>
        </footer>
    )
}