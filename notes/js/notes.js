(function($) {
    'use strict';
    $.fn.notes = function() {

        // define the application
        var Notekeeper = {};

        (function(app){

            // declare variables
            var $title  = $('#title'),
                $desc   = $('#desc'),
                $cancel = $('#cancel'),
                $submit = $('#submit'),
                $notesList = $('#notesList'),
                li = '<li><a href="#?title=LINK">ID</a></li>',
                notesHdr = '<li><h5>Your Notes</h5></li>';


            app.init = function(){
                app.bindings();
                app.checkForStorage();
            }


            app.bindings = function() {
                // cancel button binding
                $($cancel).bind('click', function() {
                    $($title).val('');
                    $($desc).val('');
                });

                // submit button binding
                $($submit).bind('click', function(e) {
                    e.preventDefault();

                    // save the note
                    app.addNote(
                        $($title).val(),
                        $($desc).val()
                    );
                });

                $($notesList).delegate('a', 'click',function(e){
                    e.preventDefault();

                    var href = $(this)[0].href;
                    href = href.replace(/^[h].*=/,'');
                    var title = href.replace(/[-]?title/,' ');
                    app.loadNote(title);
                });

                // delete note button
                $('section#theNote').delegate('footer a', 'click', function(e) {
                    e.preventDefault();

                    var result = confirm('Are you sure you want to delete this note?');

                    if (result === true) {
                        $('section#theNote').fadeOut('fast');

                        var key = $(this).data('href');
                        app.deleteNote(key);
                    } else {
                        return;
                    }
                });

            }


            app.loadNote = function(title) {
                // get notes
                var notes = app.getNotes();

                // lookup specific note
                var note = notes[title];

                var noteHeader = title.replace(/-/g,' ');

                var noteContents = '<header><h2>' + noteHeader + '</h2></header>' +
                    '<p>' + note + '</p>' +
                    '<footer><a id="deleteNote" href="#" data-href="' + title + '">Delete Note</a></footer>';

                var noteContainer = $('#theNote').html(noteContents).fadeIn('fast');
            }


            app.addNote = function(title, note) {
                var notes = localStorage['Notekeeper'];

                if (notes == undefined || notes == '') {
                    var notesObj = {};
                } else {
                    var notesObj = JSON.parse(notes);
                }

                notesObj[title.replace(/ /g,'-')] = note;
                localStorage['Notekeeper'] = JSON.stringify(notesObj);

                // clear the two form fields
                $title.val('');
                $desc.val('');

                //update the listview
                app.displayNotes();
            }


            app.getNotes = function() {
                // get notes
                var notes = localStorage['Notekeeper'];
                // convert notes from string to object
                return JSON.parse(notes);
            }


            app.displayNotes = function() {
                // get notes
                var notesObj = app.getNotes();

                // create an empty string to contain html
                var html = '';

                // loop over notes
                for (var n in notesObj) {
                    html += li.replace(/ID/g, n.replace(/-/g,' ')).replace(/LINK/g, n);
                }

                $notesList.html(notesHdr + html);
            }


            app.deleteNote = function(key){
                // get the notes from localStorage
                var notesObj = app.getNotes();

                // delete selected note
                delete notesObj[key];

                // write it back to localStorage
                localStorage['Notekeeper'] = JSON.stringify(notesObj);

                // restart the storage check
                app.checkForStorage();
            }


            app.checkForStorage = function() {

                if (localStorage['Notekeeper']) {
                    app.displayNotes();
                }

            }

            app.init();

        })(Notekeeper);

    }
})(jQuery);
