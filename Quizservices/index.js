const qbank=[
    {
        question:"Biology is the study of",
        answers:["1)life","2)non living things", '3)space','4)earth'],
        correct:'life',
        questionId:"001"

    }
,
    {
        question:"The unit of force is",
        answers:["1)kg","2)N", '3)Pa','4)Km'],
        correct:'N',
        questionId:"002"

    },
    {
        question:"The positive charge partical of an atom is",
        answers:["1)electron","2)proton", '3)nuetrin','4)ion'],
        correct:'proton',
        questionId:"003"

    },

    {
        question:"Biology is the study of",
        answers:["1life","non living things", 'space','earth'],
        correct:'life',
        questionId:"001"

    }
,
    {
        question:"The unit of force is",
        answers:["kg","N", 'Pa','Km'],
        correct:'N',
        questionId:"002"

    },
    {
        question:"The positive charge partical of an atom is",
        answers:["electron","proton", 'nuetrin','ion'],
        correct:'proton',
        questionId:"003"

    }



];


//export default qbank;

export default (n=2)=>
Promise.resolve(qbank.sort(()=>0.5-Math.random()).slice(0,n));