const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `formatDate` that formats createdAt to MMM dd, YYYY at HH:MM:DD
reactionSchema
  .virtual('createdAtFormatted')
  .get(function () {
    const longMonth = this.createdAt.toLocaleString('default', { month: 'long' });
    const mmm = longMonth.substring(0,3);
    const dd = this.createdAt.getDate();
    const yyyy = this.createdAt.getFullYear();
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
    const time = this.createdAt.toLocaleString('default', { hour: '2-digit', minute: "2-digit", hour12: true });
    const formattedDate = mmm + " " + formattedDay + ", " + yyyy + " at " + time;
    return formattedDate;
  });

module.exports = reactionSchema;
