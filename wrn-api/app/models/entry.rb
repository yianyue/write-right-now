class Entry < ActiveRecord::Base

  belongs_to :user
  
  before_create :set_default
  after_update :update_word_count_and_preview, if: :content_changed?

  # private

  def update_word_count_and_preview
    # update_columns skips callback and validation
    # otherwise it goes into a callback loop
    text_arr = self.content.gsub(/<.*?>/,' ').split
    self.update_columns(word_count: text_arr.size)
    text = text_arr[0...15].join(' ')
    text += '...' if text_arr.size > 15
    self.update_columns(preview: text)
  end

  def set_default
    self.goal = self.user.goal
    self.content = self.content || ''
    self.preview = self.preview || ''
    self.word_count = self.content.gsub(/<.*?>/,' ').split.size
  end

end