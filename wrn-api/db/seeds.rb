# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

Entry.delete_all

users = User.create([
  {
    name: 'Yian', 
    email: 'yianyue@gmail.com', 
    goal: 2, 
    password: 'password', 
    password_confirmation: 'password'
  },
  {
    name: 'Franz', 
    email: 'kafka@gmail.com', 
    goal: 500, 
    password: 'password', 
    password_confirmation: 'password'
  },
])

contents_1 = [
  'This is my app.',
  'Hello, world.',
  "It's alive!",
  "My precious.",
]

contents_2 = [
'<div>One morning, when Gregor Samsa woke from troubled dreams, he found
himself transformed in his bed into a horrible vermin.  He lay on
his armour-like back, and if he lifted his head a little he could
see his brown belly, slightly domed and divided by arches into stiff
sections.  The bedding was hardly able to cover it and seemed ready
to slide off any moment.  His many legs, pitifully thin compared
with the size of the rest of him, waved about helplessly as he
looked.</div><br>

<div>"What\'s happened to me?" he thought.  It wasn\'t a dream.  His room,
a proper human room although a little too small, lay peacefully
between its four familiar walls.  A collection of textile samples
lay spread out on the table - Samsa was a travelling salesman - and
above it there hung a picture that he had recently cut out of an
illustrated magazine and housed in a nice, gilded frame.  It showed
a lady fitted out with a fur hat and fur boa who sat upright,
raising a heavy fur muff that covered the whole of her lower arm
towards the viewer.</div><br>

<div>Gregor then turned to look out the window at the dull weather.
Drops of rain could be heard hitting the pane, which made him feel
quite sad.  "How about if I sleep a little bit longer and forget all
this nonsense", he thought, but that was something he was unable to
do because he was used to sleeping on his right, and in his present
state couldn\'t get into that position.  However hard he threw
himself onto his right, he always rolled back to where he was.  He
must have tried it a hundred times, shut his eyes so that he
wouldn\'t have to look at the floundering legs, and only stopped when
he began to feel a mild, dull pain there that he had never felt
before.</div><br>

<div>"Oh, God", he thought, "what a strenuous career it is that I\'ve
chosen! Travelling day in and day out.  Doing business like this
takes much more effort than doing your own business at home, and on
top of that there\'s the curse of travelling, worries about making
train connections, bad and irregular food, contact with different
people all the time so that you can never get to know anyone or
become friendly with them.  It can all go to Hell!"  He felt a
slight itch up on his belly; pushed himself slowly up on his back
towards the headboard so that he could lift his head better; found
where the itch was, and saw that it was covered with lots of little
white spots which he didn\'t know what to make of; and when he tried
to feel the place with one of his legs he drew it quickly back
because as soon as he touched it he was overcome by a cold shudder.</div><br>

<div>He slid back into his former position.  "Getting up early all the
time", he thought, "it makes you stupid.  You\'ve got to get enough
sleep.  Other travelling salesmen live a life of luxury.  For
instance, whenever I go back to the guest house during the morning
to copy out the contract, these gentlemen are always still sitting
there eating their breakfasts.  I ought to just try that with my
boss; I\'d get kicked out on the spot.  But who knows, maybe that
would be the best thing for me.  If I didn\'t have my parents to
think about I\'d have given in my notice a long time ago, I\'d have
gone up to the boss and told him just what I think, tell him
everything I would, let him know just what I feel.  He\'d fall right
off his desk! And it\'s a funny sort of business to be sitting up
there at your desk, talking down at your subordinates from up there,
especially when you have to go right up close because the boss is
hard of hearing.  Well, there\'s still some hope; once I\'ve got the
money together to pay off my parents\' debt to him - another five or
six years I suppose - that\'s definitely what I\'ll do.  That\'s when
I\'ll make the big change.  First of all though, I\'ve got to get up,
my train leaves at five."</div><br>
',
'<div>And he looked over at the alarm clock, ticking on the chest of
drawers.  "God in Heaven!" he thought.  It was half past six and the
hands were quietly moving forwards, it was even later than half
past, more like quarter to seven.  Had the alarm clock not rung? He
could see from the bed that it had been set for four o\'clock as it
should have been; it certainly must have rung.  Yes, but was it
possible to quietly sleep through that furniture-rattling noise?
True, he had not slept peacefully, but probably all the more deeply
because of that.  What should he do now? The next train went at
seven; if he were to catch that he would have to rush like mad and
the collection of samples was still not packed, and he did not at
all feel particularly fresh and lively.  And even if he did catch
the train he would not avoid his boss\'s anger as the office
assistant would have been there to see the five o\'clock train go, he
would have put in his report about Gregor\'s not being there a long
time ago.  The office assistant was the boss\'s man, spineless, and
with no understanding.  What about if he reported sick? But that
would be extremely strained and suspicious as in fifteen years of
service Gregor had never once yet been ill.  His boss would
certainly come round with the doctor from the medical insurance
company, accuse his parents of having a lazy son, and accept the
doctor\'s recommendation not to make any claim as the doctor believed
that no-one was ever ill but that many were workshy.  And what\'s
more, would he have been entirely wrong in this case? Gregor did in
fact, apart from excessive sleepiness after sleeping for so long,
feel completely well and even felt much hungrier than usual.</div><br>

<div>He was still hurriedly thinking all this through, unable to decide
to get out of the bed, when the clock struck quarter to seven.
There was a cautious knock at the door near his head.  "Gregor",
somebody called - it was his mother - "it\'s quarter to seven.
Didn\'t you want to go somewhere?"  That gentle voice! Gregor was
shocked when he heard his own voice answering, it could hardly be
recognised as the voice he had had before.  As if from deep inside
him, there was a painful and uncontrollable squeaking mixed in with
it, the words could be made out at first but then there was a sort
of echo which made them unclear, leaving the hearer unsure whether
he had heard properly or not.  Gregor had wanted to give a full
answer and explain everything, but in the circumstances contented
himself with saying: "Yes, mother, yes, thank-you, I\'m getting up
now."  The change in Gregor\'s voice probably could not be noticed
outside through the wooden door, as his mother was satisfied with
this explanation and shuffled away.  But this short conversation
made the other members of the family aware that Gregor, against
their expectations was still at home, and soon his father came
knocking at one of the side doors, gently, but with his fist.
"Gregor, Gregor", he called, "what\'s wrong?"  And after a short
while he called again with a warning deepness in his voice: "Gregor!
Gregor!"  At the other side door his sister came plaintively:
"Gregor? Aren\'t you well? Do you need anything?"  Gregor answered to
both sides: "I\'m ready, now", making an effort to remove all the
strangeness from his voice by enunciating very carefully and putting
long pauses between each, individual word.  His father went back to
his breakfast, but his sister whispered: "Gregor, open the door, I
beg of you."  Gregor, however, had no thought of opening the door,
and instead congratulated himself for his cautious habit, acquired
from his travelling, of locking all doors at night even when he was
at home.</div><br>',
'<div>It was a simple matter to throw off the covers; he only had to blow
himself up a little and they fell off by themselves.  But it became
difficult after that, especially as he was so exceptionally broad.
He would have used his arms and his hands to push himself up; but
instead of them he only had all those little legs continuously
moving in different directions, and which he was moreover unable to
control.  If he wanted to bend one of them, then that was the first
one that would stretch itself out; and if he finally managed to do
what he wanted with that leg, all the others seemed to be set free
and would move about painfully.  "This is something that can\'t be
done in bed", Gregor said to himself, "so don\'t keep trying to do
it".</div><br>

<div>The first thing he wanted to do was get the lower part of his body
out of the bed, but he had never seen this lower part, and could not
imagine what it looked like; it turned out to be too hard to move;
it went so slowly; and finally, almost in a frenzy, when he
carelessly shoved himself forwards with all the force he could
gather, he chose the wrong direction, hit hard against the lower
bedpost, and learned from the burning pain he felt that the lower
part of his body might well, at present, be the most sensitive.</div><br>

<div>So then he tried to get the top part of his body out of the bed
first, carefully turning his head to the side.  This he managed
quite easily, and despite its breadth and its weight, the bulk of
his body eventually followed slowly in the direction of the head.
But when he had at last got his head out of the bed and into the
fresh air it occurred to him that if he let himself fall it would be
a miracle if his head were not injured, so he became afraid to carry
on pushing himself forward the same way.  And he could not knock
himself out now at any price; better to stay in bed than lose
consciousness.</div><br>

<div>It took just as much effort to get back to where he had been
earlier, but when he lay there sighing, and was once more watching
his legs as they struggled against each other even harder than
before, if that was possible, he could think of no way of bringing
peace and order to this chaos.  He told himself once more that it
was not possible for him to stay in bed and that the most sensible
thing to do would be to get free of it in whatever way he could at
whatever sacrifice.  At the same time, though, he did not forget to
remind himself that calm consideration was much better than rushing
to desperate conclusions.  At times like this he would direct his
eyes to the window and look out as clearly as he could, but
unfortunately, even the other side of the narrow street was
enveloped in morning fog and the view had little confidence or cheer
to offer him.  "Seven o\'clock, already", he said to himself when the
clock struck again, "seven o\'clock, and there\'s still a fog like
this."  And he lay there quietly a while longer, breathing lightly
as if he perhaps expected the total stillness to bring things back
to their real and natural state.</div><br>
',
'<div>But then he said to himself: "Before it strikes quarter past seven
I\'ll definitely have to have got properly out of bed.  And by then
somebody will have come round from work to ask what\'s happened to me
as well, as they open up at work before seven o\'clock."  And so he
set himself to the task of swinging the entire length of his body
out of the bed all at the same time.  If he succeeded in falling out
of bed in this way and kept his head raised as he did so he could
probably avoid injuring it.  His back seemed to be quite hard, and
probably nothing would happen to it falling onto the carpet.  His
main concern was for the loud noise he was bound to make, and which
even through all the doors would probably raise concern if not
alarm.  But it was something that had to be risked.</div><br>

<div>When Gregor was already sticking half way out of the bed - the new
method was more of a game than an effort, all he had to do was rock
back and forth - it occurred to him how simple everything would be
if somebody came to help him.  Two strong people - he had his father
and the maid in mind - would have been more than enough; they would
only have to push their arms under the dome of his back, peel him
away from the bed, bend down with the load and then be patient and
careful as he swang over onto the floor, where, hopefully, the
little legs would find a use.  Should he really call for help
though, even apart from the fact that all the doors were locked?
Despite all the difficulty he was in, he could not suppress a smile
at this thought.</div><br>

<div>After a while he had already moved so far across that it would have
been hard for him to keep his balance if he rocked too hard.  The
time was now ten past seven and he would have to make a final
decision very soon.  Then there was a ring at the door of the flat.
"That\'ll be someone from work", he said to himself, and froze very
still, although his little legs only became all the more lively as
they danced around.  For a moment everything remained quiet.
"They\'re not opening the door", Gregor said to himself, caught in
some nonsensical hope.  But then of course, the maid\'s firm steps
went to the door as ever and opened it.  Gregor only needed to hear
the visitor\'s first words of greeting and he knew who it was - the
chief clerk himself.  Why did Gregor have to be the only one
condemned to work for a company where they immediately became highly
suspicious at the slightest shortcoming? Were all employees, every
one of them, louts, was there not one of them who was faithful and
devoted who would go so mad with pangs of conscience that he
couldn\'t get out of bed if he didn\'t spend at least a couple of
hours in the morning on company business? Was it really not enough
to let one of the trainees make enquiries - assuming enquiries were
even necessary - did the chief clerk have to come himself, and did
they have to show the whole, innocent family that this was so
suspicious that only the chief clerk could be trusted to have the
wisdom to investigate it? And more because these thoughts had made
him upset than through any proper decision, he swang himself with
all his force out of the bed.  There was a loud thump, but it wasn\'t
really a loud noise.  His fall was softened a little by the carpet,
and Gregor\'s back was also more elastic than he had thought, which
made the sound muffled and not too noticeable.  He had not held his
head carefully enough, though, and hit it as he fell; annoyed and in
pain, he turned it and rubbed it against the carpet.</div><br>
',
'<div>"Something\'s fallen down in there", said the chief clerk in the room
on the left.  Gregor tried to imagine whether something of the sort
that had happened to him today could ever happen to the chief clerk
too; you had to concede that it was possible.  But as if in gruff
reply to this question, the chief clerk\'s firm footsteps in his
highly polished boots could now be heard in the adjoining room.
From the room on his right, Gregor\'s sister whispered to him to let
him know: "Gregor, the chief clerk is here."  "Yes, I know", said
Gregor to himself; but without daring to raise his voice loud enough
for his sister to hear him.</div><br>

<div>"Gregor", said his father now from the room to his left, "the chief
clerk has come round and wants to know why you didn\'t leave on the
early train.  We don\'t know what to say to him.  And anyway, he
wants to speak to you personally.  So please open up this door.  I\'m
sure he\'ll be good enough to forgive the untidiness of your room."
Then the chief clerk called "Good morning,  Mr. Samsa". "He isn\'t
well", said his mother to the chief clerk, while his father
continued to speak through the door.  "He isn\'t well, please believe
me.  Why else would Gregor have missed a train! The lad only ever
thinks about the business.  It nearly makes me cross the way he
never goes out in the evenings; he\'s been in town for a week now but
stayed home every evening.  He sits with us in the kitchen and just
reads the paper or studies train timetables.  His idea of relaxation
is working with his fretsaw.  He\'s made a little frame, for
instance, it only took him two or three evenings, you\'ll be amazed
how nice it is; it\'s hanging up in his room; you\'ll see it as soon
as Gregor opens the door.  Anyway, I\'m glad you\'re here; we wouldn\'t
have been able to get Gregor to open the door by ourselves; he\'s so
stubborn; and I\'m sure he isn\'t well, he said this morning that he
is, but he isn\'t."  "I\'ll be there in a moment", said Gregor slowly
and thoughtfully, but without moving so that he would not miss any
word of the conversation.  "Well I can\'t think of any other way of
explaining it,  Mrs. Samsa", said the chief clerk, "I hope it\'s
nothing serious.  But on the other hand, I must say that if we
people in commerce ever become slightly unwell then, fortunately or
unfortunately as you like, we simply have to overcome it because of
business considerations."  "Can the chief clerk come in to see you
now then?", asked his father impatiently, knocking at the door
again.  "No", said Gregor.  In the room on his right there followed
a painful silence; in the room on his left his sister began to cry.</div><br>

<div>So why did his sister not go and join the others? She had probably
only just got up and had not even begun to get dressed.  And why was
she crying? Was it because he had not got up, and had not let the
chief clerk in, because he was in danger of losing his job and if
that happened his boss would once more pursue their parents with the
same demands as before? There was no need to worry about things like
that yet.  Gregor was still there and had not the slightest
intention of abandoning his family.  For the time being he just lay
there on the carpet, and no-one who knew the condition he was in
would seriously have expected him to let the chief clerk in.  It was
only a minor discourtesy, and a suitable excuse could easily be
found for it later on, it was not something for which Gregor could
be sacked on the spot.  And it seemed to Gregor much more sensible
to leave him now in peace instead of disturbing him with talking at
him and crying.  But the others didn\'t know what was happening, they
were worried, that would excuse their behaviour.</div><br>
',
'<div>The chief clerk now raised his voice, "Mr. Samsa", he called to him,
"what is wrong? You barricade yourself in your room, give us no more
than yes or no for an answer, you are causing serious and
unnecessary concern to your parents and you fail - and I mention
this just by the way - you fail to carry out your business duties in
a way that is quite unheard of.  I\'m speaking here on behalf of your
parents and of your employer, and really must request a clear and
immediate explanation.  I am astonished, quite astonished.  I
thought I knew you as a calm and sensible person, and now you
suddenly seem to be showing off with peculiar whims.  This morning,
your employer did suggest a possible reason for your failure to
appear, it\'s true - it had to do with the money that was recently
entrusted to you - but I came near to giving him my word of honour
that that could not be the right explanation.  But now that I see
your incomprehensible stubbornness I no longer feel any wish
whatsoever to intercede on your behalf.  And nor is your position
all that secure.  I had originally intended to say all this to you
in private, but since you cause me to waste my time here for no good
reason I don\'t see why your parents should not also learn of it.
Your turnover has been very unsatisfactory of late; I grant you that
it\'s not the time of year to do especially good business, we
recognise that; but there simply is no time of year to do no
business at all,  Mr. Samsa, we cannot allow there to be."</div><br>

<div>"But Sir", called Gregor, beside himself and forgetting all else in
the excitement, "I\'ll open up immediately, just a moment.  I\'m
slightly unwell, an attack of dizziness, I haven\'t been able to get
up.  I\'m still in bed now.  I\'m quite fresh again now, though.  I\'m
just getting out of bed.  Just a moment.  Be patient! It\'s not quite
as easy as I\'d thought.  I\'m quite alright now, though.  It\'s
shocking, what can suddenly happen to a person! I was quite alright
last night, my parents know about it, perhaps better than me, I had
a small symptom of it last night already.  They must have noticed
it.  I don\'t know why I didn\'t let you know at work! But you always
think you can get over an illness without staying at home.  Please,
don\'t make my parents suffer! There\'s no basis for any of the
accusations you\'re making; nobody\'s ever said a word to me about any
of these things.  Maybe you haven\'t read the latest contracts I sent
in.  I\'ll set off with the eight o\'clock train, as well, these few
hours of rest have given me strength.  You don\'t need to wait, sir;
I\'ll be in the office soon after you, and please be so good as to
tell that to the boss and recommend me to him!"</div><br>
',

'',

'<div>"Did you understand a word of all that?" the chief clerk asked his
parents, "surely he\'s not trying to make fools of us". "Oh, God!"
called his mother, who was already in tears, "he could be seriously
ill and we\'re making him suffer.  Grete! Grete!" she then cried.
"Mother?" his sister called from the other side.  They communicated
across Gregor\'s room.  "You\'ll have to go for the doctor straight
away.  Gregor is ill.  Quick, get the doctor.  Did you hear the way
Gregor spoke just now?"  "That was the voice of an animal", said the
chief clerk, with a calmness that was in contrast with his mother\'s
screams.  "Anna! Anna!" his father called into the kitchen through
the entrance hall, clapping his hands, "get a locksmith here, now!"
And the two girls, their skirts swishing, immediately ran out
through the hall, wrenching open the front door of the flat as they
went.  How had his sister managed to get dressed so quickly? There
was no sound of the door banging shut again; they must have left it
open;  people often do in homes where something awful has happened.</div><br>

<div>Gregor, in contrast, had become much calmer.  So they couldn\'t
understand his words any more, although they seemed clear enough to
him, clearer than before - perhaps his ears had become used to the
sound.  They had realised, though, that there was something wrong
with him, and were ready to help.  The first response to his
situation had been confident and wise, and that made him feel
better.  He felt that he had been drawn back in among people, and
from the doctor and the locksmith he expected great and surprising
achievements - although he did not really distinguish one from the
other.  Whatever was said next would be crucial, so, in order to
make his voice as clear as possible, he coughed a little, but taking
care to do this not too loudly as even this might well sound
different from the way that a human coughs and he was no longer sure
he could judge this for himself.  Meanwhile, it had become very
quiet in the next room.  Perhaps his parents were sat at the table
whispering with the chief clerk, or perhaps they were all pressed
against the door and listening.</div><br>
',
]

contents_1.each_index{|i|
  e = Entry.create(user: User.first, content: contents_1[i])
  e.created_at = (i).days.ago
  e.save
  e.update_word_count_and_preview
}
contents_2 = contents_2.reverse
contents_2.each_index{|i|
  e = Entry.create(user: User.second, content: contents_2[i])
  e.created_at = (i).days.ago
  e.save
  e.update_word_count_and_preview
}