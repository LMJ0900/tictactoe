import Player from "@/components/games/player";
import "@/app/games/games.css"
import Header from "@/components/games/header";
import TimerChallenge from "@/components/games/timerChallenge/timerChallenge.jsx";
export default function Games() {
  return (
    <>
    <div className="width-[60rem] margin-[2rem] padding-[2rem] bg-radial-gradient from-[#186a5e] to-[#053339] rounded-[16px] shadow-[0 2px 8px rgba(0, 0, 0, 0.8)]">
    <Header></Header>
    <Player />
    <div id="challenges">
    <TimerChallenge title="easy" targetTime={1}></TimerChallenge>
    <TimerChallenge title="Not easy" targetTime={5}></TimerChallenge>
    <TimerChallenge title="Getting tough" targetTime={10}></TimerChallenge>
    <TimerChallenge title="Pros only" targetTime={15}></TimerChallenge>
    </div>
    </div>
    </>
  );
}


