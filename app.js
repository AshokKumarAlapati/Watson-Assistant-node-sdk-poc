require("dotenv").config();



var watson = require('watson-developer-cloud');

var assistant = new watson.AssistantV1({
  iam_apikey: 'a_Be79whW_CA_3j_ZjyhHwX7nrkeFLDn8qhXGez_NneI',
  version: '2019-03-11',
  url: 'https://gateway-lon.watsonplatform.net/assistant/api'
});

assistant.listWorkspaces(function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.stringify(response, null, 2));
  }
});

assistant.message({
 workspace_id: "b6e47e13-d00a-44a8-8b0c-064425586db1",
  input: {'text': 'good'}
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});