const person1 = "../../../assets/people/person1.jpg";

export const StaffCard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-8 p-8">
      <img className="max-w-[250] max-h-[250]" src={`${person1}`} alt="" />
      <h2 className="text-3xl">Marianella Vorza</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
        suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus
        ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.
        Quisque sagittis orci ut diam c
      </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
