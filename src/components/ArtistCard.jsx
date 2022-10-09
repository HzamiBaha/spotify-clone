import { useNavigate } from "react-router-dom";


const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
    onClick={()=> navigate(`/artist/${track?.artist[0].adamid}`)}
    >
      <img src={track?.images?.coverart} alt="artist" className="w-full h-56 rounded-lg" />
      <p className="mt-4 font-semibold text-lg truncate">{track?.subtitles}</p>
    </div>
  )
};

export default ArtistCard;
