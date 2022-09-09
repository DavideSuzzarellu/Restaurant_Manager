"""empty message

Revision ID: 85b241beed24
Revises: d10160963852
Create Date: 2022-09-06 11:36:57.352860

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '85b241beed24'
down_revision = 'd10160963852'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('inmueble', sa.Column('descripcion', sa.String(length=300), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('inmueble', 'descripcion')
    # ### end Alembic commands ###
