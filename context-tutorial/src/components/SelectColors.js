import React from "react";
import { ColorConsumer } from "../contexts/color";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

export default function SelectColors() {
  return (
    <div>
      <h2>컬러를 선택하세요</h2>
      {/* 얘는 colorContext.Consumer다. 얘로 ColorContext의 값에 접근할 수 있다. */}
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  actions.setColor(color);
                }}
                // onContextMenu : 마우스 우클릭시, 메뉴가 뜨는 것을 prevenDefault로 방지함
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
}
