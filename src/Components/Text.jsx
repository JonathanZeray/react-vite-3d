import "./Text.css"

const transcription = 'zɛˈɹaɪ';
const Text = () => {
    return (
    <>
    <div className="text-container">
      <h1 className="Landing-header">ZERAY.</h1>
      <p className="Landing-transcript"> [{transcription}] </p>
    </div>
    </>
  );
};

export default Text;
