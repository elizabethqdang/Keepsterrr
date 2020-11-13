class CreateNotes < ActiveRecord::Migration[5.2]
  def change
		create_table :notes do |t|
			t.string	:title
			t.string	:body
			t.integer	:owner_id, null: false
			t.boolean :pinned, null: false, default: false
			t.boolean	:list, null: false, default: false
			
			t.timestamps
			
			t.index	:owner_id
    end
  end
end
