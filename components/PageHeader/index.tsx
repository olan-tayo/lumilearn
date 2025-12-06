const PageHeaderComponent = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <h2 className="font-semibold text-2xl lg:text-[32px] text-text-primary">
        {title}
      </h2>
      {description && (
        <h6 className="font-normal text-sm text-text-secondary">
          {description}
        </h6>
      )}
    </div>
  );
};

export default PageHeaderComponent;
