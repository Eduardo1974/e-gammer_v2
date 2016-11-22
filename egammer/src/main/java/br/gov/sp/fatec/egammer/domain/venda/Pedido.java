package br.gov.sp.fatec.egammer.domain.venda;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.domain.usuario.Usuario;
import br.gov.sp.fatec.egammer.util.View;

@Entity
@Table(name = "PEDIDO") 
public class Pedido {
	
	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "ped_codigo")
	@JsonView( View.Pedido.class)
	private Long codigo;
	
	@Column(name = "ped_data", nullable = false)
	@JsonView( View.Pedido.class)
	private Date data;
	
	@Column(name = "ped_valor",  nullable = false)
	@JsonView( View.Pedido.class)
	private Double valorTotal;
	
	@ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "usu_codigo", nullable = true)
	@JsonView( View.Pedido.class)
	private Usuario usuario;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "pedido")
	@JsonView( View.Pedido.class)
	private List<ItemPedido> itensPedido;
	
	
	public Pedido() {
		java.util.Date dataUtil = new java.util.Date();
		this.data =  new java.sql.Date(dataUtil.getTime());
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(Double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<ItemPedido> getItensPedido() {
		return itensPedido;
	}

	public void setItensPedido(List<ItemPedido> itensPedido) {
		this.itensPedido = itensPedido;
	}

	public Long getCodigo() {
		return codigo;
	}
}
