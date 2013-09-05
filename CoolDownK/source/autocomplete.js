
$(function() {

  
  var subjects = ['walk', 'skating', 'hockey', 'tennis', 'basketball', 'volleyball', 
  'open court', 'baseball', 'runnning', 'track', 'playground', 'swing', 'soccer', 'football', 
  'senior', 'Boat launch', 'beach', 'waterfront', 'rental', 'picnic', 'washroom', 'Biking Route', 
  'Biking Paved Shoulder', 'Biking Dedicated - Signed']; 
	$('#text_search').typeahead({
	source: subjects,
	items: 4,
	minLength: 2,
	});

});