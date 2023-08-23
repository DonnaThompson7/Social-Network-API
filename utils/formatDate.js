// Create a function to format createdAt to MMM ddth, YYYY at HH:MM:DD
function formattingDate (date) {
    const longMonth = date.toLocaleString('default', { month: 'long' });
    const mmm = longMonth.substring(0,3);
    const dd = date.getDate();
    const yyyy = date.getFullYear();
    const nth = (d) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    };
    const formattedDay = dd + nth(dd);
    const time = date.toLocaleString('default', { hour: '2-digit', minute: "2-digit", hour12: true });
    const formattedDate = mmm + " " + formattedDay + ", " + yyyy + " at " + time;
    // tried Thought.findByIdAndUpdate(this._id, { createdAt: formattedDate });
    return formattedDate;
  }

module.exports = formattingDate;
