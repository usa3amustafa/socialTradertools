console.log('hello')
const accordian = document.querySelector('.accordian')

accordian.addEventListener('click', function (e) {
  if (e.target.classList.contains('question-btn')) {
    e.currentTarget.querySelectorAll('.question-btn-open').forEach(btnOpen => {
      btnOpen.classList.remove('hidden')
    })
    e.currentTarget
      .querySelectorAll('.question-btn-close')
      .forEach(btnClose => {
        btnClose.classList.add('hidden')
      })
    e.currentTarget.querySelectorAll('.question').forEach(question => {
      question.classList.remove('border-active')
    })
    e.currentTarget.querySelectorAll('.question-text').forEach(qtxt => {
      qtxt.classList.remove('text-active')
    })
    e.currentTarget.querySelectorAll('.question-number').forEach(qnmb => {
      qnmb.classList.remove('text-active')
    })
    e.currentTarget.querySelectorAll('.answer-text').forEach(ans => {
      ans.classList.add('hidden')
    })
    // hide the open button and display the close btn
    e.target.classList.add('hidden')
    e.target
      .closest('.question')
      .querySelector('.question-btn-close')
      .classList.remove('hidden')
    // border on the question parent
    e.target.closest('.question').classList.add('border-active')
    // question text coloring
    e.target
      .closest('.question')
      .querySelector('.question-text')
      .classList.add('text-active')
    //question number coloring
    e.target
      .closest('.question')
      .querySelector('.question-number')
      .classList.add('text-active')
    // displaying the answer text
    e.target
      .closest('.question')
      .querySelector('.answer-text')
      .classList.remove('hidden')
  }
  if (e.target.classList.contains('question-btn-close')) {
    // hide the open button and display the close btn
    e.target.classList.add('hidden')
    e.target
      .closest('.question')
      .querySelector('.question-btn-open')
      .classList.remove('hidden')
    // border on the question parent
    e.target.closest('.question').classList.remove('border-active')
    // question text coloring
    e.target
      .closest('.question')
      .querySelector('.question-text')
      .classList.remove('text-active')
    //question number coloring
    e.target
      .closest('.question')
      .querySelector('.question-number')
      .classList.remove('text-active')
    // displaying the answer text
    e.target
      .closest('.question')
      .querySelector('.answer-text')
      .classList.add('hidden')
  }
})
