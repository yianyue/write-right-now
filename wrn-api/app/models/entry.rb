class Entry < ActiveRecord::Base

  belongs_to :user
  
  before_create :set_default
  after_update :update_word_count, if: :content_changed?

  # private

  def update_word_count
    # update_columns skips callback and validation
    # otherwise it goes into a callback loop
    self.update_columns(word_count: self.content.gsub(/<.*?>/,' ').split.size)
  end

  def set_default
    self.goal = self.user.goal
    self.content = self.content || ''
    self.word_count = self.content.gsub(/<.*?>/,' ').split.size
  end

end