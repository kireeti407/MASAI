let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
    buildSentence: function() {
        
        if (!this.subject || !this.verb || !this.object){
            console.log("Incomplete sentence")
        }
        else{
            console.log(this.subject+' '+this.verb+' '+this.object)
        }
     },
     updateProperty: function(property,value) { 
        let k=(property=='verb')?this.verb=value:(property=="object")?this.object=value:(property=="subject")?this.subject=value:false
        if (k===false){
            console.log("Invalid property")
        }
    } 
}
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("verb", " am learning")
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("mood", "happy");
sentenceBuilder.updateProperty("verb", "");
sentenceBuilder.buildSentence();