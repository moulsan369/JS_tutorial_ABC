import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <div className="w-[1920px] h-[1534px] relative bg-neutral-50">
    <div className="w-[1599px] pl-6 pr-8 py-5 left-[321px] top-0 absolute bg-slate-50 border-b border-gray-300 justify-between items-center inline-flex">
        <div className="text-blue-800 text-[32px] font-bold font-['Roboto'] leading-9">To day</div>
        <div className="justify-end items-center gap-6 flex">
            <div className="h-12 px-4 py-3 bg-gray-200 rounded-lg justify-start items-center gap-2 flex">
                <div className="w-6 h-6 relative"></div>
                <div className="text-gray-700 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum</div>
            </div>
            <div className="justify-start items-center gap-5 flex">
                <div className="px-3 py-4 rounded-lg border border-blue-800 justify-center items-center gap-2 flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="text-blue-800 text-lg font-semibold font-['Roboto'] leading-normal">Add task</div>
                </div>
                <div className="justify-start items-center gap-3 flex">
                    <img className="w-16 h-16 rounded-full border-gray-400" src="https://via.placeholder.com/64x64" />
                </div>
            </div>
        </div>
    </div>
    <div className="left-[345px] top-[220px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div className="justify-start items-start gap-6 inline-flex">
            <div className="px-5 py-6 bg-gray-50 rounded-xl shadow flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch py-3 border-b-2 border-blue-400 justify-start items-start gap-1 inline-flex">
                    <div className="justify-start items-start gap-1 flex">
                        <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">11 Dec - Today</div>
                        <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">2000</div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[118px] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl justify-start items-start gap-1 inline-flex">
                    <div className="p-1 justify-center items-center gap-2.5 flex">
                        <div className="justify-start items-start gap-2.5 flex">
                            <div className="w-[19.50px] h-[19.50px] rounded-full border border-gray-400"></div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <img className="w-[300px] h-[145px] rounded-lg" src="https://via.placeholder.com/300x145" />
                            <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                            <div className="w-[299px] h-[69px] text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                        </div>
                        <div className="w-[182px] justify-start items-end gap-1 inline-flex">
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Today</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                            <div className="w-[84px] self-stretch justify-start items-center gap-0.5 flex">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                                    <div className="text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">My project</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[118px] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[155px] px-3 py-4 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">Add task</div>
                </div>
            </div>
            <div className="px-5 py-6 bg-gray-50 rounded-xl shadow flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch py-3 border-b-2 border-yellow-500 justify-start items-start gap-1 inline-flex">
                    <div className="text-gray-950 text-2xl font-bold font-['Roboto'] leading-7">Doing</div>
                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">2</div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[118px] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="self-stretch h-[161px] flex-col justify-start items-start gap-3 flex">
                            <div className="justify-start items-start gap-1 inline-flex">
                                <div className="justify-start items-center gap-3 flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-start items-start gap-1 inline-flex">
                                <img className="w-36 h-[121px] rounded-lg" src="https://via.placeholder.com/144x121" />
                                <img className="w-36 h-[121px] rounded-lg" src="https://via.placeholder.com/144x121" />
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-1 flex">
                            <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[118px] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[155px] px-3 py-4 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">Add task</div>
                </div>
            </div>
            <div className="px-5 py-6 bg-gray-50 rounded-xl shadow flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch py-3 border-b-2 border-green-500 justify-start items-start gap-1 inline-flex">
                    <div className="text-gray-950 text-2xl font-bold font-['Roboto'] leading-7">Compelet</div>
                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">2</div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="justify-start items-center gap-1 inline-flex">
                                <div className="justify-center items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="w-[300px] h-[145px] rounded-lg" src="https://via.placeholder.com/300x145" />
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[118px] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[406px] p-6 bg-neutral-50 rounded-xl shadow justify-center items-start gap-1 inline-flex">
                    <div className="p-1 justify-start items-start gap-2.5 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[118px] justify-start items-center gap-3 inline-flex">
                                <div className="justify-start items-center gap-[5px] flex">
                                    <div className="text-gray-950 text-xl font-bold font-['Roboto'] leading-normal">Lorem ipsum</div>
                                    <div className="flex-col justify-center items-start gap-1 inline-flex">
                                        <div className="px-3 py-1 bg-red-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
                                            <div className="text-neutral-50 text-sm font-semibold font-['Roboto'] leading-tight">tag</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 flex">
                                <div className="w-[299px] text-gray-950 text-sm font-normal font-['Roboto'] leading-tight">Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre</div>
                                <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 inline-flex">
                                    <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">17h30</div>
                                    <div className="w-6 h-6 relative"></div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-end inline-flex">
                            <div className="justify-center items-center flex">
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
                                <div className="w-8 h-8 relative">
                                    <div className="w-8 h-8 left-0 top-0 absolute bg-gray-300 rounded-full"></div>
                                    <div className="left-[9px] top-[6px] absolute text-gray-700 text-xs font-normal font-['Roboto'] leading-tight">+4</div>
                                </div>
                            </div>
                            <div className="pr-1 py-1 rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-gray-500 text-sm font-normal font-['Roboto'] leading-tight">Comment</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
                <div className="w-[155px] px-3 py-4 rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">Add task</div>
                </div>
            </div>
            <div className="justify-start items-start gap-6 flex">
                <div className="h-14 px-3 py-4 bg-gray-300 rounded-lg shadow justify-center items-center gap-2 flex">
                    <div className="w-6 h-6 relative"></div>
                    <div className="text-blue-800 text-lg font-semibold font-['Roboto'] leading-normal">Add section</div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-[1599px] pl-6 pr-8 py-6 left-[321px] top-[104px] absolute justify-between items-center inline-flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[446px] justify-start items-center gap-5 inline-flex">
                <div className="w-6 h-6 relative"></div>
                <div className="text-gray-950 text-[32px] font-bold font-['Roboto'] leading-9">To day</div>
            </div>
        </div>
        <div className="h-14 px-3 py-4 rounded-lg justify-center items-center gap-2 flex">
            <div className="w-6 h-6 relative"></div>
            <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">View</div>
        </div>
    </div>
    <div className="w-6 h-6 left-[1170px] top-[511px] absolute"></div>
    <div className="w-[321px] p-8 left-0 top-0 absolute bg-slate-50 border-r border-gray-500 flex-col justify-between items-center inline-flex">
        <div className="self-stretch h-[922px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3 flex">
                    <img className="w-20 h-[38px] rounded-lg" src="https://via.placeholder.com/80x38" />
                    <div className="text-blue-500 text-xl font-semibold font-['Roboto'] leading-normal">ToDoIT</div>
                </div>
                <div className="justify-start items-start gap-1 flex">
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="p-1 rounded-lg justify-center items-center gap-2 flex">
                        <div className="w-6 h-6 relative"></div>
                    </div>
                </div>
            </div>
            <div className="w-[257px] grow shrink basis-0 flex-col justify-start items-center gap-6 flex">
                <div className="h-[860px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch h-[416px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative bg-blue-800 rounded-[22px]"></div>
                            <div className="text-blue-800 text-lg font-semibold font-['Roboto'] leading-normal">Add  task</div>
                        </div>
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative rounded-[22px]"></div>
                            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Home</div>
                        </div>
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative rounded-[22px]"></div>
                            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Projects</div>
                        </div>
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative rounded-[22px]"></div>
                            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Today</div>
                        </div>
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative rounded-[22px]"></div>
                            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Upcoming</div>
                        </div>
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative rounded-[22px]"></div>
                            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Notifications</div>
                        </div>
                        <div className="self-stretch px-1 py-4 rounded-lg justify-start items-center gap-2 inline-flex">
                            <div className="w-6 h-6 relative rounded-[22px]"></div>
                            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Setting</div>
                        </div>
                    </div>
                    <div className="self-stretch h-[0px] border border-gray-500"></div>
                    <div className="self-stretch h-14 flex-col justify-start items-end gap-1 flex">
                        <div className="w-[257px] h-14 flex-col justify-start items-end gap-1 flex">
                            <div className="self-stretch px-1 py-4 rounded-lg justify-between items-center inline-flex">
                                <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-14 flex-col justify-start items-end gap-1 flex">
                        <div className="w-[257px] h-14 flex-col justify-start items-end gap-1 flex">
                            <div className="self-stretch px-1 py-4 rounded-lg justify-between items-center inline-flex">
                                <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[284px] flex-col justify-start items-end gap-1 flex">
                        <div className="h-[284px] flex-col justify-start items-end gap-1 flex">
                            <div className="self-stretch px-1 py-4 rounded-lg justify-between items-center inline-flex">
                                <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                <div className="w-6 h-6 relative"></div>
                            </div>
                            <div className="flex-col justify-center items-end flex">
                                <div className="w-[232px] justify-start items-center gap-0.5 inline-flex">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="grow shrink basis-0 h-14 px-1 py-4 rounded-lg justify-between items-center flex">
                                        <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                        <div className="w-6 h-6 relative"></div>
                                    </div>
                                </div>
                                <div className="w-[232px] justify-start items-center gap-0.5 inline-flex">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <div className="grow shrink basis-0 h-14 px-1 py-4 rounded-lg justify-between items-center flex">
                                        <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                        <div className="w-6 h-6 relative"></div>
                                    </div>
                                </div>
                                <div className="w-[232px] justify-start items-center gap-0.5 inline-flex">
                                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                    <div className="grow shrink basis-0 h-14 px-1 py-4 rounded-lg justify-between items-center flex">
                                        <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                        <div className="w-6 h-6 relative"></div>
                                    </div>
                                </div>
                                <div className="w-[232px] justify-start items-center gap-0.5 inline-flex">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="grow shrink basis-0 h-14 px-1 py-4 rounded-lg justify-between items-center flex">
                                        <div className="text-gray-700 text-lg font-semibold font-['Roboto'] leading-normal">My project</div>
                                        <div className="w-6 h-6 relative"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch px-3 py-4 rounded-lg border border-gray-500 justify-center items-center gap-2 inline-flex">
            <div className="text-gray-500 text-lg font-semibold font-['Roboto'] leading-normal">Log out</div>
            <div className="w-6 h-6 relative"></div>
        </div>
    </div>
</div>
   </main>
  )
}
