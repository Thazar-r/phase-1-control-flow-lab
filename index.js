function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
