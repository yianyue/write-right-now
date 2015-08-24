class Entry < ActiveRecord::Base

  # attr_accessor :temp

  belongs_to :user
  
  before_create :set_default
  before_update :update_word_count_and_preview, if: :content_changed?  

  # private

  # def attributes
  #   super.merge('temp' => self.temp)
  # end

  def update_word_count_and_preview
    # update_columns skips callback and validation
    # otherwise it goes into a callback loop
    text_arr = self.content.gsub(/<.*?>/,' ').split
    text = text_arr[0...15].join(' ')
    text += ' ...' if text_arr.size > 15
    self.update_columns(word_count: text_arr.size)
    self.update_columns(preview: text)
  end

  def set_default
    self.goal = self.user.goal
    self.content = self.content || ''
    # self.preview = self.preview || ''
    self.word_count = self.content.gsub(/<.*?>/,' ').split.size
  end

  def self.set_lock(entries)
     # exclude today
    entries_mod = []
    entries.update_all(locked: false)
    total_days = Date.today - entries.first.created_at.to_date
    days_completed = entries.where("word_count >= goal").length
    num_lock = [entries.size - 1, total_days-days_completed].min
    # entries.each{|e|

    # }
    if num_lock > 0
      (0...num_lock).each{ |i|
        entries[i].locked = true
        entries[i].save
        entries_mod << entries[i]
      }
    end
    return entries_mod
  end
  
end