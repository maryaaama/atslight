import React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";
import cn from "classnames";
const RangeSlider = <T extends number | readonly number[]>(
  _props: ReactSliderProps<T>
) => {
  const isVertical = _props.orientation === "vertical";
  return (
    <ReactSlider
      {..._props}
      renderThumb={(props, state) => (
        <div
          {...props}
          className={cn({
            "h-2/3": !isVertical,
            "w-2/3": isVertical,
            "aspect-square rounded-full bg-gray2 text-xs text-white flex items-center justify-center cursor-grab p-1.5":
              true,
          })}
        >
          {state.valueNow}
        </div>
      )}
      renderTrack={(props, state) => {
        const points = Array.isArray(state.value) ? state.value.length : null;
        const isMulti = points && points > 0;
        const isLast = isMulti ? state.index === points : state.index !== 0;
        const isFirst = state.index === 0;
        return (
          <div
            {...props}
            className={cn({
              "h-1 top-1/3 -translate-y-1/2": !isVertical,
              "w-1 left-1/3 -translate-x-1/2": isVertical,
              "rounded-full": true,
              "bg-gray2": isMulti ? isFirst || isLast : isLast,
              "bg-gray1": isMulti ? !isFirst || !isLast : isFirst,
            })}
          ></div>
        );
      }}
      renderMark={(props) => {
        return (
          <div
            {...props}
            className={cn({
              "top-1/2 -translate-y-1/2": !isVertical,
              "left-1/2 -translate-x-1/2": isVertical,
              "h-[2px] w-[2px]": true,
              "rounded-full bg-gray2": true,
            })}
          ></div>
        );
      }}
    />
  );
};
export default RangeSlider;
