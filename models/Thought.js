const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: false,
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions associated with a thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Create a virtual property `formatDate` that formats createdAt to MMM dd, YYYY at HH:MM:DD
thoughtSchema
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
    // Thought.findByIdAndUpdate(this._id, { createdAt: formattedDate });
    return formattedDate;
  });
  
// Initialize our thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
