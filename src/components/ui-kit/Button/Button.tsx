"use client";
import { useEffect } from "react";

import styles from "./Button.module.scss";
import { Plus } from "@/components/svg/Plus";

export function Button({
  isLoading = false,
  label,
  onPress,
  showIcon,
  bgColor,
  labelColor,
  borderColor,
  disabled,
}: {
  isLoading?: boolean;
  label: string;
  onPress?: () => void;
  showIcon?: boolean;
  bgColor?: string;
  labelColor?: string;
  borderColor?: string;
  disabled?: boolean;
}) {
  useEffect(() => {
    if (disabled) {
      isLoading = false;
      onPress = () => {};
      bgColor = "#dde0e2";
      labelColor = "#fafbfb";
    }
  }, []);

  const handleSubmit = () => {
    if (!isLoading && onPress && !disabled) onPress();
  };

  return (
    <div
      className={!disabled ? styles.button : styles.disabledButton}
      style={{
        backgroundColor: bgColor ? bgColor : "#1E63EC",
        border: "1px solid",
        borderColor: borderColor ? borderColor : "transparent",
      }}
    >
      <div onClick={handleSubmit}>
        <div className={styles.buttonContainer} style={{ color: labelColor }}>
          <div>{label}</div>
          {showIcon && !isLoading && (
            <div className={styles.iconContainer}>
              <Plus />
            </div>
          )}
          {isLoading && <div className={styles.loadingContainer}></div>}
        </div>
      </div>
    </div>
  );
}
