"use client"
import { useParams } from "next/navigation";
import { TodoContext } from "@/context/TodoContext";
import React from "react";


export default function Page() {
  const allValues = React.useContext(TodoContext);
  if(!allValues) return null;
  const { todo } = allValues;
  const {specificTodo, setSpecificTodo} = React.useState({});
  const { id } = useParams();
  console.log(id);

    const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');

    return (
      <section className="relative z-1 overflow-hidden py-20 dark:bg-dark lg:py-[60px]">
        <div className="container mx-auto">
          <div className="mx-auto lg:justify-between">
            <div className="w-full px-4">
              <div className="relative rounded-lg bg-gray-900 p-8 shadow-lg sm:p-12 bg-opacity-70">
                <form>
                  <div className="mb-6">
                    <input
                      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-transparent dark:text-dark-6"
                      name="date"
                      value={new Date().toLocaleDateString()}
                      placeholder="Choose Date"
                      readOnly
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-transparent dark:text-dark-6"
                      name="title"
                      placeholder="Todo Title"
                      value = {title}
                      onChange={e=> setTitle(e.target.value)}
                    />
                  </div>
  
                  <div className="mb-4">
                    <textarea
                      rows={6}
                      placeholder="Add description"
                      name="details"
                      className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-transparent dark:text-dark-6"
                      value = {desc}
                      onChange={e=> setDesc(e.target.value)}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Add Todo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }