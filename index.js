function testFunc() {
  return "hi"
}
 const superbowlWin = (aGames) => {
 let gameResult =  aGames.find( value  => value.result === "W"  )
 return !!gameResult ? gameResult.year : undefined
}