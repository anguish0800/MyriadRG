let { wall: wall, normal: norm } = require("../tiles/misc.js"),
		{ atmg } = require("../tiles/siege.js"),

room = [
  	[atmg, norm, norm, norm, atmg, norm, norm, norm, atmg],
  	[norm, wall, wall, wall, wall, wall, wall, wall, norm],
  	[norm, wall, norm, norm, norm, norm, norm, wall, norm],
  	[norm, wall, norm, norm, norm, norm, norm, wall, norm],
  	[atmg, wall, norm, norm, norm, norm, norm, wall, atmg],
  	[norm, wall, norm, norm, norm, norm, norm, wall, norm],
  	[norm, wall, norm, norm, norm, norm, norm, wall, norm],
  	[norm, wall, wall, wall, wall, wall, wall, wall, norm],
 		[atmg, norm, norm, norm, atmg, norm, norm, norm, atmg]
]

module.exports = room