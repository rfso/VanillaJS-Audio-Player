import { PlayerContainer } from './PlayerContainer'
import { PlayerInfo } from './PlayerInfo'
import { PlayerControls } from './PlayerControls'
import { AudioPlayerFunctions } from '../AudioPlayerFunctions'


export const AudioPlayer = () => {
  PlayerContainer()
  PlayerInfo()
  PlayerControls()
  AudioPlayerFunctions()
}
