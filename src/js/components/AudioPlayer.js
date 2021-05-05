import { PlayerContainer } from './PlayerContainer'
import { PlayerInfo } from './PlayerInfo'
import { PlayerControls } from './PlayerControls'
import { audioPlayerFunctions } from '../audioPlayerFunctions'


const AudioPlayer = () => {
  PlayerContainer()
  PlayerInfo()
  PlayerControls()
  audioPlayerFunctions()
}

export default AudioPlayer
