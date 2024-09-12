const passScore = 51;

function getFeedback (score, student) {
    if (score < passScore) {
        console.log(`სამწუხაროდ ${student}, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ ${passScore - score} ქულა, უკეთესად მოემზადეთ`);
    } else if (score >= passScore && score < 90) {
        console.log(`გილოცავთ ${student}, თქვენ ${score - passScore} ქულით მეტი აიღეთ ბარიერზე`);
    } else if (score > 90) {
        console.log(`გილოცავთ ${student}, ძალიან კარგი შედეგი გაქვთ`);
    }
}

getFeedback(30, 'Mindia');
getFeedback(81, 'Edgar');