function initialize() {
  visitsOut = document.getElementById("visits");

  if (!sessionStorage.numVisits)
    sessionStorage.numVisits = 0;
  else
    sessionStorage.numVisits++;

  display();
}