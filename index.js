const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];

  function titleCased(str) {
    return str.toLowerCase().split(` `).map(function(word) {
      return (word.chartAt(0).toUpperCase() + word.slice(1));
    }).join(` `);
  }
  titleCased(tutorials)


function findMatching(drivers, name) {
  const filteredDrivers = []
  for(let driver of drivers) {
    if(driver.toLowerCase() === name.toLowerCase()) {
      filteredDrivers.push(driver)
    }
  }
  return filteredDrivers
}

function fuzzyMatch(drivers, letters) {
  const fuzzyFilter = []
  for(let driver of drivers) {
    if(driver.startsWith(letters)) {
      fuzzyFilter.push(driver)
    }
  }
  return fuzzyFilter
}


function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}