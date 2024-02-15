interface LabelProps {
  text: string;
  htmlFor: string;
}

export const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  const classes = "text-2xl font-bold w-full";
  return (
    <label className={classes} htmlFor={htmlFor}>
      {text}
    </label>
  );
};
