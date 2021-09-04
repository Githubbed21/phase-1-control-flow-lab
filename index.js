function scuberGreetingForFeet(ride){
if (ride >= 2500){
  return "No can do."
}
else if
  (ride >= 2000){
    return "I will gladly take your thirty bucks."
  }
else if
(ride <= 400) {
  return "This one is on me!"
 }
}

function ternaryCheckCity(city){
 if(city == 'NYC'){
   return 'Ok, sounds good.'
 }
 else if (city == 'Pittsburgh'){
   return 'No go.'
 }
}

function switchOnCharmFromTip(generous){
  switch(generous) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default :
      return 'Bye.'
  }
}
