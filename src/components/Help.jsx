import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHelp } from "../store/markdownSlice";

const Help = () => {
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp);
  const dispatch = useDispatch();
  return (
    <button
      className="absolute right-5 top-10 w-12 h-12 p-4 flex items-center justify-center bg-theme-question-bg text-5xl font-bold shadow-2xl"
      onClick={() => dispatch(toggleHelp(!isShowingHelp))}
    >
      ?
    </button>
  );
};

export default Help;
