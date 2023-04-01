import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRawText } from "../store/markdownSlice";
import { marked } from "marked";

const Panels = () => {
  const textUser = useSelector((state) => state.markdown.textUser);
  const textHelp = useSelector((state) => state.markdown.textHelp);
  const isShowingHelp = useSelector((state) => state.markdown.isShowingHelp);
  const [rawText, setRawText] = useState("this is user input");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRawText(rawText));
  }, [rawText, dispatch]);

  return (
    <>
      <div className="mt-5 w-full flex flex-row justify-center items-center gap-6">
        {/* left panel */}
        <textarea
          className="flex-1 focus:outline-none resize-none h-auto min-h-[600px] p-2 bg-theme-input-bg shadow-2xl"
          readOnly={isShowingHelp}
          value={isShowingHelp ? textHelp : textUser}
          onChange={(e) => setRawText(e.target.value)}
        ></textarea>

        {/* right panel */}
        <div
          className="flex-1 h-auto min-h-[600px] p-2 bg-theme-input-bg shadow-2xl"
          dangerouslySetInnerHTML={{
            __html: marked(`${isShowingHelp ? textHelp : textUser}`),
          }}
        ></div>
      </div>
    </>
  );
};

export default Panels;
