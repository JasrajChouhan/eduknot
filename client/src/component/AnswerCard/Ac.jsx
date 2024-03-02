const truncateContent = (content) => {
    if (content.length > 100) {
      return content.slice(0, 100) + '...';
    }
    return content;
  };
 
const Ac = (props) => {
    let me = props.Answer;
  let isTruncated = true;

  const clickHandle = (e) => {
    const h1 = e.target.closest('div').querySelector('h1');
    if (isTruncated) {
      h1.innerHTML = props.Answer;
      e.target.innerText = "Read Less";
    } else {
      h1.innerHTML = truncateContent(me);
      e.target.innerText = "Read More";
    }
    isTruncated = !isTruncated;
  };
  

  return (
    <>
      <div className="border mb-2 mr-10 px-5 py-2 rounded-md border-black">
        <div className="mb-3 mt-1">
          <p className="text-black opacity-60 text-sm">{props.name}</p>
          <h1 id="me" className="pt-2">
            {truncateContent(me)}
          </h1>
        </div>
        {props.Answer.length > 100 && (
          <button onClick={clickHandle} className="relative border border-black p-1 rounded-md hover:bg-black hover:text-white">
            <p>Read more</p>
          </button>
        )}
      </div>
    </>
  );
};

export default Ac;
