class Task < ApplicationRecord
  acts_as_list scope: [:list_id, completed_at: nil], top_of_list: 0

  belongs_to :assignee, class_name: "User", optional: true
  belongs_to :creator, class_name: "User"
  belongs_to :list


  validates :name, presence: true

  scope :incomplete_first, -> { order(completed_at: :desc) }

  def complete?
    completed_at.present?
  end


end
