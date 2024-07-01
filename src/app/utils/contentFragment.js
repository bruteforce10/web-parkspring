import Image from "next/image";
import React from "react";

export const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }

    if (obj.code) {
      modifiedText = (
        <code
          className="bg-[#366da0] py-[.5px] px-[5px] rounded-md"
          key={index}
        >
          {text}
        </code>
      );
    }
  }
  switch (type) {
    case "heading-four":
      return (
        <h4 key={index} className="text-xl font-medium mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );
    case "heading-three":
      return (
        <h3 key={index} className="text-2xl font-medium mt-12 mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    case "heading-two":
      return (
        <h2 key={index} className="text-3xl font-medium mt-12 mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h2>
      );
    case "heading-one":
      return (
        <h2 key={index} className="text-4xl font-medium mt-12 mb-4">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mb-8 leading-relaxed">
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );

    case "bulleted-list":
      return (
        <ul key={index} className="list-disc space-y-2 mb-6 ml-4">
          {obj.children.map((item, index) => {
            return <li key={index}>{item.children[0].children[0].text}</li>;
          })}
        </ul>
      );

    case "image":
      return (
        <Image
          key={index}
          height={obj.height}
          width={obj.width}
          alt={obj.altText}
          src={obj.src}
          className="mb-4 rounded-xl"
        />
      );
    case "code-block":
      return (
        <div className="mockup-code mb-6">
          {modifiedText.map((item, i) => {
            const language = item.split("&");
            return (
              <React.Fragment key={i}>
                {language.map((item, i) => {
                  return (
                    <pre key={i}>
                      <code>{item}</code>
                    </pre>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      );
    default:
      return modifiedText;
  }
};
