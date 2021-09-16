import React from "react";
import { Face } from "../Face/Face";
import "./Response.scss";

export const Response = ({ id, text, tags, sentiment }) => (
  <div className="response" id={id}>
    <p
      className="response__text"
      dangerouslySetInnerHTML={{ __html: text }}
    ></p>
    <div className="response__face-tag-wrapper">
      <Face sentiment={sentiment} />
      {tags.map((tag) => (
        <div key={tag} className="response__tag">
          {tag}
        </div>
      ))}
    </div>
  </div>
);
